const { stdin, stdout } = require("process");
const readline = require("readline");
const apiKey = "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";
const { Configuration, OpenAIApi } = require("openai");

const rl = readline.createInterface({ input: stdin, output: stdout });

const configuration = new Configuration({
  apiKey,
});
const openai = new OpenAIApi(configuration);

const requestGpt = async (prompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with "Unknown".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:',
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  console.log(response);
  return prompt;
};

const listenInput = () => {
  rl.question("Digite algo: ", async (entrada) => {
    console.log(`prompt: ${await requestGpt(entrada)}`);
    listenInput();
  });
};

listenInput();

const knowledge = [
  "Quero ser um novo cliente Bless. Quais os equipamentos necessários para utilizar os sistemas? É tudo muito simples. Veja a relação abaixo: - Computadores com processador duo core, 2 Gb de Memória RAM, com Windows XP ou superior e leitor de DVD - Servidores de banco de dados com Windows ou Linux - Dispositivo de backup e rede conectada à Gigabit - Acesso à internet Viu como é simples? Agora é só instalar.",
  "Qual o investimento para adquirir os sistemas da Bless? O investimento varia de acordo com o tamanho da sua empresa e as necessidades específicas do seu negócio. Por isso, o ideal é que você entre em contato com um dos nossos consultores para fazer uma avaliação personalizada e receber uma proposta adequada à sua realidade.",
  "Agora eu já sou cliente da Bless. Qual o tipo de suporte que a empresa me oferece? A Bless oferece um suporte técnico especializado e ágil, que funciona de segunda a sexta-feira, das 8h às 18h, através de telefone, e-mail ou chat online. Além disso, você também pode contar com o nosso portal do cliente, onde você encontra tutoriais, vídeos, manuais e outras informações úteis para tirar suas dúvidas e aproveitar ao máximo os recursos dos nossos sistemas.",
  "Já vi sistemas demorarem até anos para serem implementados. Quero saber: qual é o prazo médio para a instalação e funcionamento dos sistemas da Bless? O prazo médio para a instalação e funcionamento dos sistemas da Bless é de 30 a 90 dias, dependendo da complexidade do projeto e do envolvimento do cliente. Nós temos uma equipe qualificada e experiente que acompanha todo o processo de implantação, desde a análise das necessidades até o treinamento dos usuários finais.",
  "Quais são as etapas para instalação de um sistema da Bless? As etapas para instalação de um sistema da Bless são as seguintes: - Levantamento das necessidades do cliente - Definição do escopo do projeto - Instalação do sistema no servidor e nos computadores - Migração dos dados existentes (se houver) - Configuração dos parâmetros e personalizações - Treinamento dos usuários - Acompanhamento pós-implantação",
  "Posso instalar o sistema da Bless em um servidor local, dentro da minha empresa? Sim, você pode instalar o sistema da Bless em um servidor local, dentro da sua empresa, desde que ele atenda aos requisitos mínimos de hardware e software necessários para o bom funcionamento do sistema. Você também pode optar por hospedar o sistema na nuvem, utilizando os serviços de um provedor de sua confiança ou contratando a nossa solução de cloud computing.",
  "É possível adaptar os sistemas da Bless às necessidades da minha empresa? Sim, é possível adaptar os sistemas da Bless às necessidades da sua empresa, desde que essas adaptações não comprometam a integridade e a segurança dos dados ou a compatibilidade com as atualizações futuras. Nós temos uma equipe de desenvolvimento que pode analisar as suas solicitações e propor as melhores soluções para atender às suas demandas.",
  "De quanto tempo é o contrato de prestação de serviços da Bless? O contrato de prestação de serviços da Bless é anual, renovável automaticamente, salvo manifestação contrária de qualquer das partes com antecedência mínima de 30 dias do término do período contratual.",
  "Quais são as condições de pagamento dos sistemas da Bless? As condições variam de acordo com o sistema adquirido. Mas o melhor é que as pessoas que trabalham no departamento Comercial da empresa vão fazer tudo para oferecer as melhores condições de pagamento, sempre! Pode conferir!",
  "Qual é a área de atuação da Bless? A Bless Sistemas atende em todo território nacional. Pode entrar em contato que vamos até você. E bem rápido!",
  "Eu quero conhecer os sistemas da Bless. O que tenho que fazer e onde encontro? Aqui mesmo no nosso site temos todos os produtos que oferecemos. Para fazer um orçamento sem compromisso é só enviar um email para: mailto:comercial@blesssistemas.com.br. Você também pode ligar para o telefone (37) 3326-6606.",
  "Os sistemas da Bless são adequados para que tamanho de empresa: micro, pequenas, médias ou grandes? A Bless tem sistemas para empresas de todos os portes, sempre com a mesma atenção para resolver todas as situações.",
  "Qual seria um motivo para trocar meu sistema por um sistema da Bless? A Bless resolve. E não descansamos enquanto não resolvemos. Mas podemos te dar muitos e muitos outros motivos. Entre em contato conosco para conversarmos.",
];
