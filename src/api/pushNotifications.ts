import notifee, { type TimestampTrigger, TriggerType } from '@notifee/react-native';

export const CHANNEL_ID = 'notes';

export async function setUpNotification() {
  await notifee.requestPermission();

  await notifee.createChannel({
    id: CHANNEL_ID,
    name: 'Modsen todo list',
  });
}

export async function onCreateTriggerNotification(
  id: string,
  body: string,
  date: string,
  time: string,
  start: boolean,
) {
  const startTime = new Date(date);

  const noteTime = new Date(time);
  startTime.setHours(noteTime.getHours());
  startTime.setMinutes(noteTime.getMinutes());

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: startTime.getTime(),
  };

  const titleNotifee = start ? `Task has been started!(${body})` : `The task's time has finished (${body})`;
  const bodyNotifee = start ? `You should hurry to start doing it` : `Did you manage to finish it?`;

  try {
    await notifee.createTriggerNotification(
      {
        id,
        title: titleNotifee,
        body: bodyNotifee,
        android: {
          channelId: CHANNEL_ID,
          smallIcon: 'launch_screen',
          pressAction: {
            id: 'default',
          },
          timestamp: startTime.getTime(),
          showTimestamp: true,
        },
      },
      trigger,
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
    }
  }
}

export async function cancel(notificationId: string) {
  await notifee.cancelNotification(notificationId);
}
