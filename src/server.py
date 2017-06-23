import os
import pkg_resources
from bottle import route, run, template

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@route('/')
def index():
    return template('index.html')


@route('/<dir_name>/<file_name>')
def static_file(dir_name, file_name):
    return pkg_resources.resource_string(__name__, dir_name+'/'+file_name)

run(host="192.168.33.10", port=8080)