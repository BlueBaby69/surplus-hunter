import LeadCard from "../../../components/LeadCard";

export default function LeadDetails({ params }) {
  return <LeadCard id={params.id} />;
}
