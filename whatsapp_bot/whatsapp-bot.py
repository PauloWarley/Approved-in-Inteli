""
# coding: utf-8

import random
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

import time
import urllib

from database import GetPhones

getPhones = GetPhones()

navegador = webdriver.Chrome()
navegador.get("https://web.whatsapp.com/")

while len(navegador.find_elements(By.ID,"side")) < 1:
    time.sleep(1)

pessoa = 'Paulo'
mensagem = 'Saiu o resultado do Inteli!!'

numeros = getPhones.get()

frases = [
    ["Acerte em tudo que puder acertar. Mas não se torture com seus erros.",
    "Paulo Coelho (Manuscrito Encontrado em Accra, 2012)"],
        
    ["Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão.",
    "Mahatma Gandhi"],

    ["É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada.",
    "Mark Zuckerberg"],

    ["A possibilidade de realizarmos um sonho é o que torna a vida interessante.",
    "Paulo Coelho"],

    ["A vida é uma grande universidade, mas pouco ensina a quem não sabe ser aluno.",
    "Augusto Cury"],

    ["Por medo de diminuir, deixamos de crescer. Por medo de chorar, deixamos de rir.",
    "Paulo Coelho (Manual do Guerreiro da Luz, 1997)"],

    ["A persistência é o caminho do êxito.",
    "Charles Chaplin"],

    ["Quantas coisas perdemos por medo de perder.",
    "Paulo Coelho (Brida, 1990)"]
    ,
    ["O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.",
    "José de Alencar"],

    ["A alegria está na luta, na tentativa, no sofrimento envolvido e não na vitória propriamente dita.",
    "Mahatma Gandhi"],

    ["Não se deixe intimidar pela opinião dos outros. Só a mediocridade é segura, por isso corra seus riscos e faça o que deseja.",
    "Paulo Coelho (O Aleph, 2011)"],

    ["A coragem não é ausência do medo; é a persistência apesar do medo.",
    "Desconhecido"],
    
    ['"Por meio do estudo você encontrará tudo que precisa para conquistar seus sonhos."']
    ['Marianna Moreno'],

    ['"O homem nasceu para aprender tanto quanto a vida lhe permita."']
    ['Guimarães Rosa'],

    ['"O seu conhecimento é tudo que fica quando as séries acabam. Estudem e aprendam sempre mais."']
    ['Marianna Moreno'],

    ['"A educação é uma arma que deixa mais poderoso quem a usa, sem machucar ninguém."']
    ['Marianna Moreno'],

    ['"Tudo que vale a pena é difícil e exige esforço. Estudem mesmo sendo complicado, porque trará os melhores resultados."']
    ['Marianna Moreno'],

    ['"Estudar abre portas que ultrapassam o conhecimento e trazem resultados que podemos ver e segurar com as nossas mãos."']
    ['Marianna Moreno'],

    ['"Não deixe que a preguiça te impeça de estudar, ela só vai te atrasar a chegar ao seu objetivo."']
    ['Marianna Moreno'],

    ['"Não estude para ter boas notas, mas para adquirir conhecimento e descobrir novos mundos."']
    ['Marianna Moreno'],

    ['"Não procure estudar muito hoje. Procure estudar pouco todos os dias. Essa é a chave do aprendizado!"']
    ['Prof. Leandro Piccini'],

    ['"O aprendizado é uma arma que traz paz e muitas recompensas. Se muna dela em toda sua vida!"']
    ['Marianna Moreno'],

    ['"Quando mais você estuda, mais aprende e descobre sobre as possibilidades do mundo."']
    ['Marianna Moreno'],

    ['"Que a sede por conhecimento nunca se acabe e você sempre encontre novas fontes para se hidratar."']
    ['Marianna Moreno'],

    ['"Não conte com a sorte, faça a sua parte, estude, se desenvolva e busque realizar tudo o que deseja."']
    ['Marianna Moreno'],

    ['"Educação é o passaporte para o futuro, porque o amanhã pertence àqueles que se preparam para ele hoje."']
    ['Malcolm X'],

    ['"Faça do estudo uma parte importante da sua vida, mas não deixe de curtir os amigos, a família e fazer o que gosta!"']
    ['Marianna Moreno'],

    ['"A tentação de desistir será um pouco maior antes de você estar prestes a conseguir."']
    ['Provérbio Chinês'],

    ['"Para passar no vestibular é preciso encontrar o equilíbrio entre estudo e diversão, para assim aprender e deixar a mente sã."']
    ['Marianna Moreno'],

    ['"Se você pode sonhar, você pode realizar."']
    ['Walt Disney'],

    ['"Use seu conhecimento para abrir portas, construir seu futuro e descobrir o seu lugar no mundo."']
    ['Marianna Moreno'],

    ['"Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si mesmo."']
    ['Ayrton Senna'],

    ['"Lembrem-se: o conhecimento não é só para a escola, mas para te ajudar em todas as áreas da vida."']
    ['Marianna Moreno'],

    ['"A gente chega bem mais longe quando se dedica e acredita!"']
    ['A gente chega bem mais longe quando se dedica e acredita!'],

    ['"Use a educação que aprendeu a seu favor. Ela é uma ferramenta valiosa na realização dos seus sonhos."']
    ['Marianna Moreno'],

    ['"Estudar é um direito, mas poucos possuem o privilégio de só fazer isso. Faça valer a pena a chance que possui e se dedique ao máximo!"']
    ['Marianna Moreno'],

    ['"Estudar é evoluir, é avançar um degrau na escada da vida!"']
    ['Marianna Moreno'],

    ['"Aprender algo novo a cada dia é o que nos faz sentir vivos. Abra sua mente e nunca pare de estudar!"']
    ['Marianna Moreno'],

    ['"O que diferencia um bom aluno de um mau aluno é a sua dedicação."']
    ['Marianna Moreno'],

    ['"O caminho do autoconhecimento, da evolução e das descobertas é o estudo!"']
    ['Marianna Moreno'],

    ['"Nunca foi sorte, sempre foi estudo, dedicação, esforço e muita força de vontade!"']
    ['Marianna Moreno'],

    ['"O início da realização de um sonho é o estudo."']
    ['Marianna Moreno'],

    ['"Gênio é um por cento de inspiração e noventa e nove por cento de transpiração."']
    ['Thomas Edison'],

    ['"Não importa para onde a vida te levará, se você estudar, chegará mais longe!"']
    ['Marianna Moreno'],

    ['"Faça as pazes com a escola, estude e vislumbre um novo futuro à sua frente."']
    ['Marianna Moreno']
]

for i in numeros:
    numero = i
    print("Número:", i)
    
    frase = random.choice(frases)

    texto = urllib.parse.quote(f"""Oii ! {mensagem}\n "{frase[0]}"\n{frase[1]}""")
    link = f"https://web.whatsapp.com/send?phone={numero}&text={texto}"
    
    navegador.get(link)
    while len(navegador.find_elements(By.ID, "side")) < 1:
        time.sleep(1)
        
    while len(navegador.find_elements(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div/p/span')) < 1:
        time.sleep(1)
    navegador.find_element(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div/p/span').send_keys(Keys.ENTER)
    time.sleep(5)
