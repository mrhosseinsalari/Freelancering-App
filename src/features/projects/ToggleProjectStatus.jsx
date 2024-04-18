import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const enabled = status === "OPEN" ? true : false;
  const { toggleProjectStatus, isUpdating } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";

    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading width={50} height={20} />
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          enabled={enabled}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
