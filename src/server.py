from bottle import route, run, template

@route('/')
def index():
    return template('index.html')

run(host="192.168.33.10", port=8080)