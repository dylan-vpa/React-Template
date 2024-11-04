//Components
//Image
export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}
// Button
export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "success";
  size?: "small" | "normal" | "large";
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
}

// Checkbox
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

// RadioButton
export interface RadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  className?: string;
}

// Switch
export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// Slider
export interface SliderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// Select
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
  className?: string;
}

// Autocomplete
export interface AutocompleteProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  options: string[];
  className?: string;
}

// DatePicker
export interface DatePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// TimePicker
export interface TimePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

//TextInput
export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

//TextAres
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

//PasswordInput
export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

//SearchInput
export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

//FileInput
export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  accept? : string;
  className?: string;
}

//NumberInput
export interface NumberInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

//RichTextEditor
export interface RichTextEditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

//Form
export interface FormProps {
  className?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

//Avatar
export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
  size?: number; 
}

//Badge
export interface BadgeProps {
  text: string;
  className?: string;
}

//Tooltip
export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

//Popover
export interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

//Modal
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

//Alert
export interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  className?: string;
}

//Toast
export interface ToastProps {
  message: string;
  className?: string;
  onClose?: () => void; 
}

//ProgressBar
export interface ProgressBarProps {
  progress: number; 
  className?: string;
}

//SkeletonLoader
export interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
}

//Card
export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

//List
export interface ListProps {
  items: string[];
  className?: string;
}

//Table
export interface TableProps {
  headers: string[];
  data: string[][];
  className?: string;
}

//Tab
export interface Tab {
  label: string;
  content: React.ReactNode;
}

//Tabs
export interface TabsProps {
  tabs: Tab[];
  className?: string;
}

//AccordionItem
export interface AccordionItem {
  label: string;
  content: React.ReactNode;
}

//Accordion
export interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

//Grid
export interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
}

//Stack
export interface StackProps {
  children: React.ReactNode;
  className?: string;
  spacing?: number; 
}

//Divider
export interface DividerProps {
  className?: string;
}

//Pagination
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

//BreadcrumbItem
export interface BreadcrumbItem {
  label: string;
  link: string;
}

//Breadcrumb
export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

//Navbar
export interface NavbarProps {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}

//Sidebar
export interface SidebarProps {
  links: { label: string; href: string }[];
  className?: string;
}

//Menu
export interface MenuProps {
  items: { label: string; onClick: () => void }[];
  className?: string;
}

//Drawer
export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

//Step
export interface Step {
  label: string;
  completed: boolean;
}

//Stepper
export interface StepperProps {
  steps: Step[];
  className?: string;
}

//Spinner
export interface SpinnerProps {
  size?: number; 
  color?: string; 
}

//EmptyState
export interface EmptyStateProps {
  message: string;
  illustration?: React.ReactNode; 
}

//ErrorBoundary
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode; 
}

// VideoPlayer
export interface VideoPlayerProps {
  src: string;
  controls?: boolean;
}

//AudioPlayer
export interface AudioPlayerProps {
  src: string; 
  controls?: boolean; 
}

//Carousel
export interface CarouselProps {
  items: React.ReactNode[];
  className?: string;
}

//ThemeSwitcher
export interface ThemeSwitcherProps {
  currentTheme: 'light' | 'dark';
  onChange: (theme: 'light' | 'dark') => void; 
}

//ColorPicker
export interface ColorPickerProps {
  color: string; 
  onChange: (color: string) => void; 
}

//Typography
export interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p'; 
  children: React.ReactNode; 
}