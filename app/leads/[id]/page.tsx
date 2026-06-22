import LeadCard from "../../../components/LeadCard";

export default function LeadDetails({ params }) {
  return (
    <main className="p-6">
      <LeadCard id={params.id} />
    </main>
  );
}
