import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>PREMIUM FITNESS SESSIONS</h1>
        <p>
          Discover the ultimate in fitness with our premium workout sessions,
          designed to elevate your training experience to new heights.
        </p>
      </div>
      <div className="wrapper">
        <h1>FEATURED FITNESS BOOTCAMPS</h1>
        <p>
          Immerse yourself in elite fitness bootcamps that redefine your
          approach to physical conditioning and wellness.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Transformative Workouts</h4>
            <p>
              Engage in transformative workouts that push your boundaries and
              inspire personal growth.
            </p>
          </div>
          <div>
            <h4>Dynamic Fitness Challenges</h4>
            <p>
              Embrace dynamic fitness challenges that enhance strength, endurance,
              and overall fitness levels.
            </p>
          </div>
          <div>
            <h4>High-Intensity Training</h4>
            <p>
              Experience high-intensity training sessions designed to maximize
              performance and achieve peak fitness levels.
            </p>
          </div>
          <div>
            <h4>Personalized Coaching</h4>
            <p>
              Receive personalized coaching to refine your technique and achieve
              your fitness goals faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
