import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-crash-course-1a458-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history("/", { replace: true });
    });
  }

  return (
    <section>
      <h1> Add New Meetup </h1>
      <NewMeetupForm onAddMeetUp={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
