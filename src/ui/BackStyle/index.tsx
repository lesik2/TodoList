import {LargeCircle, SmallCircle, WrapperCircles, WrapperView} from './styled';

export interface IBackStyle{
  type: 'circle'|'apple'
}

export function BackStyle({type}:IBackStyle) {
  return (
    <WrapperView>
      <WrapperCircles>
        <SmallCircle
          colors={['#646FD4', '#9BA3EB']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          locations={[0.6, 0.9]}
          $isCircle={type === 'circle'}
        />
        <LargeCircle
          colors={['#646FD4', '#9BA3EB', '#FFFFFF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0.3, 0.6, 0.8]}
          $isCircle={type === 'circle'}
        />
      </WrapperCircles>
    </WrapperView>
  );
}
