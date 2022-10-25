// eager loading
const { Account, Profile } = require('../models');

const getAccountById = async (req, res) => {
  try {
    const listOfAccounts = await Account.findAll({
      where: { id: req.params.id },
      include: [{ model: Profile, as: 'profile' }],
    });

    if (!listOfAccounts.length) {
      return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(listOfAccounts[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

// lazy loading
const getAccountByIdLazy = async (req, res) => {
  try {
    const listOfAccounts = await Account.findAll({
      where: { id: req.params.id },
    });

    if (!listOfAccounts.length) {
      return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(listOfAccounts[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const saveAccountAndProfile = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;
    const account = await Account.create({ email, password });

    if (!account) {
      return res.status(404).send({ message: 'Erro ao cadastrar uma conta!' });
    }

    const profile = await Profile.create(
      { firstName, lastName, phone, accountId: account.id },
    );

    if (!profile) {
      return res.status(404).send({ message: 'Erro ao cadastrar um perfil!' });
    }

    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getAccountById,
  getAccountByIdLazy,
  saveAccountAndProfile,
};
