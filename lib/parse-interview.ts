export type InterviewQuestion = {
  id: string;
  code: string;
  trackId: string;
  title: string;
  level: string;
  source: string;
  prompt: string;
  answer: string;
  structure: string;
  followUps: string;
  trap: string;
};

export type InterviewTrack = {
  id: string;
  title: string;
  source: string;
  questions: InterviewQuestion[];
};

export type InterviewPlaybook = {
  title: string;
  blurb: string;
  tracks: InterviewTrack[];
};
