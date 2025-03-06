export interface BMIData {
  category: string;
  color: string;
  range: string;
}

export interface ExercisePlan {
  title: string;
  description: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: string;
    videoId: string;
  }>;
}

export interface DietPlan {
  meals: Array<{
    time: string;
    items: string[];
    portions: string;
  }>;
  tips: string[];
}