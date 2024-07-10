const exercises = [
    {
      "name": "Biceps",
      "exercises": [
        {
          "name": "Bicep Curl",
          "video": "ykJmrZ5v0Oo"
        },
        {
          "name": "Hammer Curl",
          "video": "zC3nLlEvin4"
        },
        {
          "name": "Concentration Curl",
          "video": "8HsCw4bLwbk"
        },
        {
          "name": "Preacher Curl",
          "video": "dX_nSOOJIsE"
        },
        {
          "name": "Cable Curl",
          "video": "FdREa3f9fWA"
        },
        {
          "name": "Incline Dumbbell Curl",
          "video": "SOzVZRvVzS4"
        },
        {
          "name": "Zottman Curl",
          "video": "1ik0WpJ9TF8"
        },
        {
          "name": "Chin-Up",
          "video": "4WaCFh03tT8"
        },
        {
          "name": "EZ-Bar Curl",
          "video": "ykKm2epqxoQ"
        }
      ]
    },
    {
      "name": "Triceps",
      "exercises": [
        {
          "name": "Tricep Dips",
          "video": "0326dy_-CzM"
        },
        {
          "name": "Tricep Pushdown",
          "video": "2-LAMcpzODU"
        },
        {
          "name": "Skull Crushers",
          "video": "d_KZxkY_0cM"
        },
        {
          "name": "Close-Grip Bench Press",
          "video": "1CGoGnZAG8Q"
        },
        {
          "name": "Overhead Tricep Extension",
          "video": "p32NIEiX5pE"
        },
        {
          "name": "Tricep Kickback",
          "video": "d_KZxkY_0cM"
        },
        {
          "name": "Diamond Push-Up",
          "video": "wvIAyxpjEuc"
        },
        {
          "name": "Single-Arm Cable Pushdown",
          "video": "03Yc6tSEYz8"
        },
        {
          "name": "Bench Dip",
          "video": "NIEnPt6B5rM"
        }
      ]
    },
    {
      "name": "Chest",
      "exercises": [
        {
          "name": "Bench Press",
          "video": "gRVjAtPip0Y"
        },
        {
          "name": "Push-Up",
          "video": "IODxDxX7oi4"
        },
        {
          "name": "Chest Fly",
          "video": "eozdVDA78K0"
        },
        {
          "name": "Incline Bench Press",
          "video": "SrqOu55lrYU"
        },
        {
          "name": "Decline Bench Press",
          "video": "LfRz9PWgqBo"
        },
        {
          "name": "Cable Crossover",
          "video": "taI4XduLpTk"
        },
        {
          "name": "Dumbbell Pullover",
          "video": "_t3OwEohDhA"
        },
        {
          "name": "Pec Deck Machine",
          "video": "9QzJ4glMJDI"
        },
        {
          "name": "Chest Press Machine",
          "video": "gZKHb89k0B4"
        }
      ]
    },
    {
      "name": "Back",
      "exercises": [
        {
          "name": "Pull-Up",
          "video": "eGo4IYlbE5g"
        },
        {
          "name": "Bent Over Row",
          "video": "ZlRrIsoDpKg"
        },
        {
          "name": "Lat Pulldown",
          "video": "CAwf7n6Luuc"
        },
        {
          "name": "Deadlift",
          "video": "r4MzxtBKyNE"
        },
        {
          "name": "T-Bar Row",
          "video": "71Eq9UTMw8s"
        },
        {
          "name": "Single-Arm Dumbbell Row",
          "video": "pYcpY20QaE8"
        },
        {
          "name": "Seated Cable Row",
          "video": "GZbfZ033f74"
        },
        {
          "name": "Hyperextension",
          "video": "LPFVUHyK3MS"
        },
        {
          "name": "Straight-Arm Pulldown",
          "video": "0d46QcKBvHE"
        }
      ]
    },
    {
      "name": "Legs",
      "exercises": [
        {
          "name": "Squat",
          "video": "aclHkVaku9U"
        },
        {
          "name": "Lunge",
          "video": "COKYKgQ8KR0"
        },
        {
          "name": "Leg Press",
          "video": "IZxyjW7MPJQ"
        },
        {
          "name": "Deadlift",
          "video": "r4MzxtBKyNE"
        },
        {
          "name": "Leg Curl",
          "video": "1Tq3QdYUuHs"
        },
        {
          "name": "Leg Extension",
          "video": "YyvSfVjQeL0"
        },
        {
          "name": "Calf Raise",
          "video": "-M4-G8p8fmc"
        },
        {
          "name": "Bulgarian Split Squat",
          "video": "2C-uNgKwPLE"
        },
        {
          "name": "Step-Up",
          "video": "qc5AC2E2jEI"
        }
      ]
    },
    {
      "name": "Shoulders",
      "exercises": [
        {
          "name": "Shoulder Press",
          "video": "EqQ2-Ipg8bA"
        },
        {
          "name": "Lateral Raise",
          "video": "3VcKaXpzqRo"
        },
        {
          "name": "Front Raise",
          "video": "-t7fuZ0KhDA"
        },
        {
          "name": "Rear Delt Fly",
          "video": "6jaG5jMFv0E"
        },
        {
          "name": "Upright Row",
          "video": "R35Q9k7QsyA"
        },
        {
          "name": "Arnold Press",
          "video": "ykKK4yK1K50"
        },
        {
          "name": "Face Pull",
          "video": "rep-qVOkqgk"
        },
        {
          "name": "Shrug",
          "video": "Rd6_zeWjDzQ"
        },
        {
          "name": "Cable Lateral Raise",
          "video": "KeXiI_p6uqg"
        }
      ]
    },
    {
      "name": "Abs",
      "exercises": [
        {
          "name": "Crunch",
          "video": "5ER5OFKec0A"
        },
        {
          "name": "Leg Raise",
          "video": "JB2oyawG9KI"
        },
        {
          "name": "Plank",
          "video": "pSHjTRCQxIw"
        }
      ]
    }
  ];
  
  export default exercises;
  