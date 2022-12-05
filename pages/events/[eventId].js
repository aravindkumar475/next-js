import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../component/event-detail/event-summary';
import EventLogistics from '../../component/event-detail/event-logistics';
import EventContent from '../../component/event-detail/event-content';
import ErrorAlert from '../../component/ui/error-alert';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;