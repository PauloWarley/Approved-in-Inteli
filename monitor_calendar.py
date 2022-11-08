import requests, json, time

from whatsapp_bot.database import PostProjectStatus

payload={}
headers = {}


def get_quantity(url, theme = ""):
    _sum = 0
    response = requests.request("GET", url, headers=headers, data=payload)
    response = json.loads(response.text)
    for i in response['days']:
        for j in i['spots']:
            _sum = _sum + j['invitees_remaining']

    return {'sum': _sum, 'theme': theme}

def __main__():

    url = "https://calendly.com/api/booking/event_types/6fea56d5-07f6-438e-8e07-4d73cc53fde3/calendar/range?timezone=America%2FSao_Paulo&diagnostics=false&range_start=2022-11-07&range_end=2022-11-30"

    saude_qntd = get_quantity(url, "Saúde & Bem-Estar")["sum"]

    url = "https://calendly.com/api/booking/event_types/2210265d-8947-44c7-98fc-257076078f2b/calendar/range?timezone=America/Sao_Paulo&diagnostics=false&range_start=2022-11-07&range_end=2022-11-30"

    clima_qntd = get_quantity(url, "Clima")["sum"]

    url = "https://calendly.com/api/booking/event_types/8b9a7c9b-6c34-474b-aceb-1dacb9dac585/calendar/range?timezone=America/Sao_Paulo&diagnostics=false&range_start=2022-11-07&range_end=2022-11-30"

    seguranca_qntd = get_quantity(url, "Segurança Urbana")["sum"]

    sum_total = saude_qntd + clima_qntd +seguranca_qntd
    
    PostProjectStatus().post( data = {
            "vagas": 390,
            "inscricoes": 390 - sum_total,
            "saude": 130-saude_qntd,
            "clima": 130-clima_qntd,
            "seguranca": 130-seguranca_qntd
        }
    )

    print(f"""
{time.ctime()}
Vagas: 390
Incrições: {390 - sum_total}
Restante: {sum_total}
Saúde & Bem-Estar: {130-saude_qntd}  | Clima: {130-clima_qntd} | Segurança Urbana: {130-seguranca_qntd}
""")

while True:
    __main__()
    time.sleep(300)