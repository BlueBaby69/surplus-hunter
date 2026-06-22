import LeadCard from "../../../components/LeadCard";

export default function LeadDetails({ params }: { params: { id: string } }) {
  return <LeadCard id={params.id} />;
}
