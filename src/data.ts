import { BMIData, ExercisePlan, DietPlan } from './types';

export const BMI_CATEGORIES: Record<string, BMIData> = {
  underweight: {
    category: 'Underweight',
    color: 'text-blue-600',
    range: 'Below 18.5',
  },
  normal: {
    category: 'Normal Weight',
    color: 'text-green-600',
    range: '18.5 - 24.9',
  },
  overweight: {
    category: 'Overweight',
    color: 'text-yellow-600',
    range: '25 - 29.9',
  },
  obese: {
    category: 'Obese',
    color: 'text-red-600',
    range: '30 or greater',
  },
};

export const EXERCISE_PLANS: Record<string, ExercisePlan> = {
  underweight: {
    title: 'Muscle Building Program',
    description: 'Focus on compound exercises with progressive overload to build muscle mass.',
    exercises: [
      {
        name: 'Bench Press',
        sets: 4,
        reps: '8-12',
        videoId: 'rT7DgCr-3pg',
      },
      {
        name: 'Squats',
        sets: 4,
        reps: '8-12',
        videoId: 'ultWZbUMPL8',
      },
      {
        name: 'Deadlifts',
        sets: 4,
        reps: '8-12',
        videoId: 'r4MzxtBKyNE',
      },
      {
        name: 'Overhead Press',
        sets: 4,
        reps: '8-12',
        videoId: 'QAQ64hK4ocU',
      },
      {
        name: 'Barbell Rows',
        sets: 4,
        reps: '8-12',
        videoId: 'RQU8wZPbioA',
      },
      {
        name: 'Dips',
        sets: 3,
        reps: '8-12',
        videoId: 'wjUmnZH528Y',
      },
    ],
  },
  normal: {
    title: 'Balanced Fitness Program',
    description: 'Mix of strength training and cardio for overall fitness.',
    exercises: [
      {
        name: 'Push-ups',
        sets: 3,
        reps: '12-15',
        videoId: 'IODxDxX7oi4',
      },
      {
        name: 'Pull-ups',
        sets: 3,
        reps: '8-12',
        videoId: 'eGo4IYlbE5g',
      },
      {
        name: 'Running',
        sets: 1,
        reps: '20-30 mins',
        videoId: 'brFHyOtTwH4',
      },
      {
        name: 'Kettlebell Swings',
        sets: 3,
        reps: '15-20',
        videoId: 'YSxHifyI6s8',
      },
      {
        name: 'Plank Variations',
        sets: 3,
        reps: '30-60 seconds',
        videoId: 'pSHjTRCQxIw',
      },
      {
        name: 'Jump Rope',
        sets: 3,
        reps: '2 minutes',
        videoId: 'u3zgHI8QnqE',
      },
    ],
  },
  overweight: {
    title: 'Weight Management Program',
    description: 'Combination of cardio and strength training for fat loss.',
    exercises: [
      {
        name: 'Burpees',
        sets: 3,
        reps: '10-15',
        videoId: 'dZgVxmf6jkA',
      },
      {
        name: 'Mountain Climbers',
        sets: 3,
        reps: '30 seconds',
        videoId: 'nmwgirgXLYM',
      },
      {
        name: 'Jump Rope',
        sets: 3,
        reps: '2 minutes',
        videoId: 'u3zgHI8QnqE',
      },
      {
        name: 'Bodyweight Squats',
        sets: 4,
        reps: '15-20',
        videoId: 'YaXPRqUwItQ',
      },
      {
        name: 'Modified Push-ups',
        sets: 3,
        reps: '10-15',
        videoId: 'jWxvty2KROs',
      },
      {
        name: 'Resistance Band Rows',
        sets: 3,
        reps: '12-15',
        videoId: 'xQNrFHEMhI4',
      },
    ],
  },
  obese: {
    title: 'Low Impact Program',
    description: 'Focus on low-impact exercises to protect joints while burning calories.',
    exercises: [
      {
        name: 'Walking',
        sets: 1,
        reps: '30 mins',
        videoId: 'njeZ29umqVE',
      },
      {
        name: 'Swimming',
        sets: 1,
        reps: '20 mins',
        videoId: 'gh5mAtmeR3Y',
      },
      {
        name: 'Stationary Bike',
        sets: 1,
        reps: '20 mins',
        videoId: 'fqZYz7V_HdA',
      },
      {
        name: 'Seated Resistance Band Exercises',
        sets: 3,
        reps: '12-15',
        videoId: 'TBQF1qyCKrc',
      },
      {
        name: 'Water Aerobics',
        sets: 1,
        reps: '20 mins',
        videoId: 'jqk7EoKHX_c',
      },
      {
        name: 'Chair Yoga',
        sets: 1,
        reps: '15 mins',
        videoId: 'KEjiXtb2hRg',
      },
    ],
  },
};

export const DIET_PLANS: Record<string, DietPlan> = {
  underweight: {
    meals: [
      {
        time: 'Breakfast',
        items: ['Oatmeal with nuts and fruits', 'Protein shake', 'Whole grain toast with avocado'],
        portions: 'Large portions',
      },
      {
        time: 'Lunch',
        items: ['Brown rice', 'Grilled chicken breast', 'Mixed vegetables', 'Olive oil'],
        portions: 'Large portions',
      },
      {
        time: 'Dinner',
        items: ['Sweet potato', 'Salmon', 'Quinoa', 'Steamed vegetables'],
        portions: 'Large portions',
      },
    ],
    tips: [
      'Eat every 2-3 hours',
      'Include protein with every meal',
      'Add healthy fats to increase calorie intake',
    ],
  },
  normal: {
    meals: [
      {
        time: 'Breakfast',
        items: ['Greek yogurt with berries', 'Whole grain toast', 'Eggs'],
        portions: 'Moderate portions',
      },
      {
        time: 'Lunch',
        items: ['Grilled chicken salad', 'Quinoa', 'Olive oil dressing'],
        portions: 'Moderate portions',
      },
      {
        time: 'Dinner',
        items: ['Lean protein', 'Brown rice', 'Steamed vegetables'],
        portions: 'Moderate portions',
      },
    ],
    tips: [
      'Maintain balanced meals',
      'Stay hydrated',
      'Include variety of fruits and vegetables',
    ],
  },
  overweight: {
    meals: [
      {
        time: 'Breakfast',
        items: ['Egg white omelet', 'Whole grain toast', 'Fresh fruits'],
        portions: 'Controlled portions',
      },
      {
        time: 'Lunch',
        items: ['Grilled fish', 'Mixed green salad', 'Light dressing'],
        portions: 'Controlled portions',
      },
      {
        time: 'Dinner',
        items: ['Lean protein', 'Steamed vegetables', 'Small portion of whole grains'],
        portions: 'Controlled portions',
      },
    ],
    tips: [
      'Focus on portion control',
      'Avoid processed foods',
      'Drink water before meals',
    ],
  },
  obese: {
    meals: [
      {
        time: 'Breakfast',
        items: ['Protein smoothie', 'Small portion of oatmeal', 'Fresh berries'],
        portions: 'Small portions',
      },
      {
        time: 'Lunch',
        items: ['Large salad with lean protein', 'Light dressing', 'Apple'],
        portions: 'Moderate portions',
      },
      {
        time: 'Dinner',
        items: ['Grilled chicken or fish', 'Large portion of vegetables', 'Small portion of quinoa'],
        portions: 'Controlled portions',
      },
    ],
    tips: [
      'Eat slowly and mindfully',
      'Focus on protein and fiber',
      'Avoid sugary drinks and snacks',
    ],
  },
};