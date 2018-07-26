import { put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { Socket } from 'phoenix';

export function* connectToSocket() {
  const socket = new Socket('ws:localhost:4000/socket');
  socket.connect();
  return socket;
}

// channel.join is async, this is probably an error
export function* joinChannel(socket, channelName) {
  const channel = socket.channel(channelName, {});
  channel.join()
    .receive('ok', (resp) => {
      console.log('Joined successfully', resp);
    })
    .receive('error', (resp) => {
      console.log('Unable to join', resp);
    });

  return channel;
}

// this function creates an event channel from a given socket
export const createSocketChannel = (channel, constant, fn) =>
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  eventChannel((emit) => {
    const newDataHandler = (event) => {
      console.log(event);
      emit(fn(event));
    };

    channel.on(constant, newDataHandler);

    const unsubscribe = () => {
      channel.off(constant, newDataHandler);
    };

    return unsubscribe;
  });

export function* handleUpdatedData(action) {
  yield put(action);
}
