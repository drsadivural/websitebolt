import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import { BarChart, PieChart, LineChart } from 'lucide-react';
import SolutionFeature from '../../components/solutions/SolutionFeature';

const DataAnalytics = () => {
  return (
    <div>
      <PageHeader
        title="Data Analytics"
        description="Transform raw data into actionable insights"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SolutionFeature
              icon={BarChart}
              title="Predictive Analytics"
              description="Forecast trends and make data-driven decisions"
            />
            <SolutionFeature
              icon={PieChart}
              title="Business Intelligence"
              description="Comprehensive business analytics solutions"
            />
            <SolutionFeature
              icon={LineChart}
              title="Real-time Analytics"
              description="Live data processing and visualization"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;