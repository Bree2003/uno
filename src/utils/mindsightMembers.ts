import EnumMapper from './EnumMapper';
import SocialsIcons from './socialsIcons';

export enum MindsightArea {
  CEO,
  MENTALHEALTH,
  NUTRITION,
  MARKETING,
  TECH,
}

export const MindsightFrameClassMapper: EnumMapper<MindsightArea, string> = {
  [MindsightArea.CEO]: 'ceo-frame',
  [MindsightArea.MENTALHEALTH]: 'mental-health-frame',
  [MindsightArea.NUTRITION]: 'nutrition-frame',
  [MindsightArea.MARKETING]: 'marketing-frame',
  [MindsightArea.TECH]: 'tech-frame',
};

export type SocialsInput = {
  [Key in keyof typeof SocialsIcons]?: string | undefined;
};

export type Member = {
  name: string;
  role: string;
  description?: string;
  imageUrl?: string;
  socials: SocialsInput;
  area: MindsightArea;
};

const mindsightMembers: Member[] = [
  {
    name: 'Joaquín Pinilla',
    role: 'CEO',
    description:
      'El objetivo que tenemos es ayudar a las personas a mejorar su calidad de sueño, ya que siempre ha sido crucial para una vida saludable el lograr un descanso adecuado. Con este propósito en mente, buscamos promover una mejor salud mental y nutricional, conscientes de que las actividades diurnas tienen un impacto significativo en nuestra capacidad para conciliar el sueño por la noche.',
    socials: {},
    area: MindsightArea.CEO,
    imageUrl: 'pini.jpg',
  },
  {
    name: 'Julio Castro',
    role: 'Tech Lead',
    description:
      'Soy un ingeniero de software de profesión que considera que la tecnología es una herramienta que puede ser utilizada para mejorar nuestro día a día. Junto a Mindsight, busco aportar mi granito de arena para que las personas puedan tener un mejor descanso y, por ende, una mejor calidad de vida.',
    socials: {},
    area: MindsightArea.TECH,
    imageUrl: 'julio.jpg',
  },
  {
    name: 'Iván Cantone',
    role: 'Jefe de MKT y diseño',
    description:
      'Vivo con el pensamiento intrínseco de que a la vida le falta más color y a los sueños más relevancia. Vivir por un buen sueño es mi motivación número uno para ser parte de Mindsight. Si mi apoyo al equipo sirve para captar el interés de al menos una persona, yo ya le gané a la vida.',
    socials: {},
    area: MindsightArea.MARKETING,
    imageUrl: 'ivan.jpg',
  },
  {
    name: 'María Ignacia Canessa',
    role: 'Psicóloga clínica especialista en estrés y ansiedad',
    description:
      'Mi pasión se encuentra en acompañar a las personas en su camino de bienestar integral desde la autocompasión, atención plena y autoconocimiento. Teniendo en cuenta hábitos saludables por nuestra fuerte conexión mente, cuerpo y alma. Creando objetivos y herramientas concretas para potenciar y construir tu camino de bienestar, desde un espacio de confianza, escucha y reflexión.',
    socials: {},
    area: MindsightArea.MENTALHEALTH,
    imageUrl: 'mari.jpg',
  },
];
export default mindsightMembers;
