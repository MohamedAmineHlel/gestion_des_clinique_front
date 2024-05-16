export interface Patient {
  idPat?: number; // Make id optional as it will be generated by the backend
  cinPat: number;
  nomPat: string;
  modePaiement: string; // Ensure this matches the enum values in the backend
  email: string;
  telPat: number;
  dateNaissance: Date;
}