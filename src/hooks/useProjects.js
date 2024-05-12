import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsApi,
    retry: false,
  });

  const { projects } = data || {};

  return { isLoading, projects };
}
