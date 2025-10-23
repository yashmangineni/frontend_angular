import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoadingComponent } from './pages/loading/loading';

export const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  { path: 'loading', component: LoadingComponent },
  { path: 'interview', loadComponent: () => import('./pages/interview/interview').then(m => m.Interview), canActivate: [AuthGuard] },
  { path: 'signup', loadComponent: () => import('./pages/auth/signup').then(m => m.SignupPage) },
  { path: 'login', loadComponent: () => import('./pages/auth/login').then(m => m.LoginPage) },
  { path: 'contact', loadComponent: () => import('./pages/contactus/contactus').then(m => m.Contactus), },
  { path: 'privacy', loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy), },

  { path: 'ai-interviews', loadComponent: () => import('./pages/ai-interviews/ai-interviews').then(m => m.AiInterviews),  },
  { path: 'coding-test', loadComponent: () => import('./pages/coding-test/coding-test').then(m => m.CodingTest),  },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.Profile),},
  { path: 'hr', loadComponent: () => import('./pages/hr/hr').then(m => m.Hr), },
  { path: 'aptitude', loadComponent: () => import('./pages/aptitude/aptitude').then(m => m.Aptitude),},
  { path: 'resume-template', loadComponent: () => import('./pages/resume-template/resume-template').then(m => m.ResumeTemplate), },
  { path: 'prep', loadComponent: () => import('./pages/interview-prep/interview-prep').then(m => m.InterviewPrep),  },
  { path: 'prep/java', loadComponent: () => import('./pages/lang-java/lang-java').then(m => m.LangJava),  },
  { path: 'prep/sql', loadComponent: () => import('./pages/sql/sql').then(m => m.Sql), },
  { path: 'prep/html', loadComponent: () => import('./pages/html/html').then(m => m.Html), },
  { path: 'prep/css', loadComponent: () => import('./pages/css/css').then(m => m.Css),  },
  { path: 'prep/js', loadComponent: () => import('./pages/js/js').then(m => m.Js),},


  { path: 'prep/python', loadComponent: () => import('./pages/lang-python/lang-python').then(m => m.LangPython),  },
  { path: 'prep/csharp', loadComponent: () => import('./pages/lang-csharp/lang-csharp').then(m => m.LangCsharp),  },
  { path: 'prep/angular', loadComponent: () => import('./pages/lang-angular/lang-angular').then(m => m.LangAngular),  },
  { path: 'prep/spring', loadComponent: () => import('./pages/lang-spring/lang-spring').then(m => m.LangSpring),  },
  { path: 'prep/springboot', loadComponent: () => import('./pages/lang-springboot/lang-springboot').then(m => m.LangSpringBoot),  },
  
  // Rating route
  { path: 'rate', loadComponent: () => import('./pages/rating/rating').then(m => m.Rating), },
  
  // Share route
  { path: 'share', loadComponent: () => import('./pages/share/share').then(m => m.Share), }
];