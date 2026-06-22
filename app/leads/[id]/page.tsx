import LeadCard from "../../components/LeadCard";

export default function LeadDetails({ params }) {
  return (
    <div>
      <h1>Lead Details</h1>
      <LeadCard id={params.id} />
    </div>
  );
}
