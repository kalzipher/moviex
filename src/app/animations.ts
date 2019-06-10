// import {
//   trigger,
//   transition,
//   style,
//   query,
//   group,
//   animateChild,
//   animate,
//   keyframes
// } from '@angular/animations';
// export const fader = trigger('routerAnimations', [
//   transition('* <=> *', [
//     query(':enter, :leave', [
//       style({
//         opacity: 0,
//         transform: 'scale(3) translateY(25%)',
//       })
//     ]),
//     group([
//       query(':enter', [
//         animate('200ms ease', keyframes([
//           style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
//           style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
//           style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
//         ]))
//       ]),
//       query(':leave', [
//         animate('2000ms ease', keyframes([
//           style({ transform: 'scale(1)', offset: 0 }),
//           style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
//           style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
//         ])),
//       ])
//     ]),
//   ])
// ])
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
export const fader = trigger('myAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
       [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
