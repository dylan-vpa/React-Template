//Utils(Images, Colors, Typography, Interfaces, etc.)
import { StepperProps } from '../../lib/utils/interfaces';

function Stepper({ steps, className = '' }: StepperProps) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className={`flex items-center ${step.completed ? 'text-green-500' : 'text-gray-500'}`}>
          <span>{step.label}</span>
          {index < steps.length - 1 && <span className="mx-2">→</span>}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
