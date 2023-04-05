# Crie novas classes, LogError(), LogWarning, LogSuccess() com o padrão
# Decorator, para imprimir colorido as seguintes frases de Log:
# Success(Verde): O sistema está funcionando
# Warning(Laranja): O sistema está lento
# Error(Vermelho): O sistema está com erros

VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogWarning:
    def __init__(self, log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA} {self.log.dispara_log(message)}{RESET}"


class LogError:
    def __init__(self, log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"


class LogSuccess:
    def __init__(self, log) -> None:
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"


logger = Log()
print(LogSuccess(logger).dispara_log("O sistema esta funcionando"))
print(LogWarning(logger).dispara_log("O sistema esta lento"))
print(LogError(logger).dispara_log("O sistema esta com erros"))
