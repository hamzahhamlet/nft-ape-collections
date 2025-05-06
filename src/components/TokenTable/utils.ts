// Import all SVG icons
const icons = import.meta.glob("../../assets/icons/*.svg", { eager: true });

// Default fallback icon path
const FALLBACK_ICON = "/energi-logo.png";

export const getTokenIcon = (symbol: string): string => {
  try {
    if (!symbol) return FALLBACK_ICON;
    
    // Try uppercase first
    const upperSymbol = symbol.toUpperCase();
    const iconPath = `../../assets/icons/${upperSymbol}.svg`;
    const iconModule = icons[iconPath];
    if (iconModule) {
      return (iconModule as { default: string }).default;
    }
    
    // Try lowercase if uppercase not found
    const lowerSymbol = symbol.toLowerCase();
    const lowerIconPath = `../../assets/icons/${lowerSymbol}.svg`;
    const lowerIconModule = icons[lowerIconPath];
    if (lowerIconModule) {
      return (lowerIconModule as { default: string }).default;
    }
    
    // Return fallback if no icon found
    console.warn(`No icon found for symbol: ${symbol}`);
    return FALLBACK_ICON;
  } catch (error) {
    console.error(`Error loading icon for ${symbol}:`, error);
    return FALLBACK_ICON;
  }
}; 