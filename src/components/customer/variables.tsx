import React, { createContext, useState, useContext, ReactNode } from "react";

type FormData = {
    name: string
    telephone: string
    address: string
    district: string
    ward: string,
    note_ship: string,
    note_restaurant: string,
}

// Define the shape of the context state
interface AppStateContextType {
  errors: Record<string, boolean>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  createdName: string | null;
  setCreatedName: React.Dispatch<React.SetStateAction<string | null>>;
  isEditable: boolean;
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
  isNonEditable: boolean;
  setIsNonEditable: React.Dispatch<React.SetStateAction<boolean>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

// Create the context with default undefined value
const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

// Custom hook for accessing the context
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};

// Provider component
export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [createdName, setCreatedName] = useState<string | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isNonEditable, setIsNonEditable] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    telephone: "",
    address: "",
    district: "",
    ward: "",
    note_ship: "",
    note_restaurant: "",
  });

  return (
    <AppStateContext.Provider
      value={{
        errors,
        setErrors,
        isSubmitting,
        setIsSubmitting,
        submitted,
        setSubmitted,
        createdName,
        setCreatedName,
        isEditable,
        setIsEditable,
        isNonEditable,
        setIsNonEditable,
        formData,
        setFormData,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
