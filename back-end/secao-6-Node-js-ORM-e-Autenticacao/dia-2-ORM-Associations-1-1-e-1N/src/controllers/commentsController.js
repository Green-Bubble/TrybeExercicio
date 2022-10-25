const { Comment } = require('../models');

const getCommentsByAccountId = async (req, res) => {
  try {
    const listOfComments = await Comment.findAll({
      where: { accountId: req.params.id },
    });

    if (!listOfComments.length) {
      return res.status(404).send({ message: 'Nenhum comentário cadastrado' });
    }

    return res.status(200).json(listOfComments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const saveComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    const comment = await Comment.create({ message, upvoting: 0, downvoting: 0, accountId: id });

    if (!comment) {
      return res.status(404).send({ message: 'Erro ao cadastrar o comentário' });
    }

    return res.status(200).json({ message: 'Comentário cadastrado com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getCommentsByAccountId,
  saveComment,
};