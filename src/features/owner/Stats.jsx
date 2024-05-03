function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfOpenProjects = projects.map((p) => p.status === "OPEN").length;

  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

  return <div>Stats</div>;
}

export default Stats;
