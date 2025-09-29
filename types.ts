
export enum Category {
  RESOURCE_ALLOCATION = "Resource Allocation",
  SCOPE_CREEP = "Scope Creep",
  TECHNICAL_DEBT = "Technical Debt",
  COMMUNICATION = "Communication Breakdown",
  WORKLOAD_IMBALANCE = "Workload Imbalance",
  UNCLEAR_REQUIREMENTS = "Unclear Requirements",
}

export interface ImpactScores {
  budget: number;
  timeline: number;
  scope: number;
}

export interface Reply {
  author: 'PM' | 'Submitter';
  text: string;
  timestamp: string;
}

export interface Submission {
  id: string;
  category: Category;
  impact: ImpactScores;
  situation: string;
  problem: string;
  suggestion: string;
  timestamp: string;
  replies: Reply[];
}

export interface PublicAction {
  id: string;
  category: Category;
  relatedSubmissions: number;
  actionTaken: string;
  timestamp: string;
}
