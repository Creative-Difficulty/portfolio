import raw from "./projects.json";

export type Project = {
	name: string;
	slug: string;
	description: string;
	tags: string[];
	githubUrl: string | null;
	private: boolean;
};

const projects = (raw.projects ?? []) as Project[];
const homeLimit = raw.homeLimit ?? projects.length;

export { projects, homeLimit };
