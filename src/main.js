import '@/styles/index.scss';

import 'virtual:svg-icons-register';
import '@/plugins';

import '@/js/global-state';
import '@/js/modal';
import { setWheelLastStage } from '@/js/wheel';
import '@/js/sign-up';
import '@/js/terms-and-privacy';
import useViewportSizes from '@/js/use-viewport-sizes';
import { getFromLS } from '@/js/local-storage';
import { openLoginModal } from './js/login';

const loginBtnRef = document.querySelector('.js-login-btn');

useViewportSizes();

const isLastStage = getFromLS('isLastStage');

// if (isLastStage) {
//   setWheelLastStage();
//   openSignUpModal({ isBlocked: true });
// }

loginBtnRef.addEventListener('click', openLoginModal);
