//Utils(Images, Colors, Typography, Interfaces, etc.)
import React, { Component } from 'react';
import { ErrorBoundaryProps } from '../../lib/utils/interfaces';

class ErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.props.fallback}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
