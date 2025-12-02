import React from 'react';

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  image: string;
}