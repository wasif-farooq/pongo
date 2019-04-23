import socketio

sio = socketio.Client()

@sio.on('connect', namespace='/chat')
def on_connect():
    print('connection established')
    sio.emit('chat_message','this is client message',namespace='/chat')

@sio.on('chat_reply', namespace='/chat')
def on_message(data):
    print('message received with ', data)

@sio.on('disconnect', namespace='/chat')
def on_disconnect():
    print('disconnected from server')

sio.connect('http://localhost:8080', namespaces=['/chat'])
sio.wait()