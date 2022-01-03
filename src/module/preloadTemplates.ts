export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = ['modules/attack-card-damage/templates/damage-buttons.html'];

  return loadTemplates(templatePaths);
}
