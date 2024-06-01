import Member from "../components/Member";

function Premium() {
  return (
    <div>
      <h2>Premium Members</h2>
      {[0, 1, 2, 3, 4, 5].map((member, i) => (
        <Member key={i} id={member._id || 1} />
      ))}
    </div>
  );
}

export default Premium;
