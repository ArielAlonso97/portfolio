interface ILanguageContext {
  language: ITranslations;
  setlanguage: React.Dispatch<React.SetStateAction<ITranslations>>;
  noLocalStrLang: boolean;
  setnoLocalStrLang: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IAlert {
  text: string;
  type: "alert" | "error";
}

interface ISkill {
  key: string;
  porcentage: number;
  years?: number;
  description?: string;
}

interface IJob {
  position: string;
  company: string;
  date: string;
  tasks: string[];
}
interface INavbarSection {
  title: string;
  id: string;
}
interface ICertificate {
  title: string;
  iFrame: string;
  issuedBy: string;
}
interface ITranslations {
  language: string;
  navbar: {
    sections: INavbarSection[];
  };
  presentation: {
    title: string;
    description: string;
    role: string;
  };
  education: {
    title: string;
    universities: {
      name: string;
      degree: string;
    }[];
    certificates: {
      title: string;
      list: ICertificate[];
    };
  };
  skills: {
    title: string;
    description: string;
    percentageDes: string;
    languages: {
      title: string;
      list: ISkill[];
    };
    spokenLanguages: {
      title: string;
      list: string[];
    };
  };
  experience: {
    title: string;
    jobs: IJob[];
  };
  contact: {
    title: string;
    resumeButton: string;
    name: string;
    location: string;
    phone: string;
    email: string;
    web: string;
  };
  contactForm: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
  };
}
