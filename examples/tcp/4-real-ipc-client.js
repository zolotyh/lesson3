import ipc from 'node-ipc';

ipc.config.id = 'a-unique-process-name2';
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.connectTo('a-unique-process-name1', () => {
  ipc.of['a-unique-process-name1'].on('connect', () => {
    ipc.of['a-unique-process-name1'].emit('a-unique-message-name', "Message from client");
  });
});
