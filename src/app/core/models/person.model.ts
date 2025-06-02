// src/app/core/models/person.model.ts (or person.interface.ts)
export interface Person {
  personId: number;
  name: string;
  currentRank: string | null; // Use null or undefined to account for potentially missing values
  currentDutyTitle: string | null;
  careerStartDate: Date | null;
  careerEndDate: Date | null;
}
