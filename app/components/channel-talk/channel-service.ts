/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */

declare global {
  interface Window {
    ChannelIO?: IChannelIO;
    ChannelIOInitialized?: boolean;
  }
}

interface IChannelIO {
  c?: (...args: any) => void;
  q?: [methodName: string, ...args: any[]][];
  (...args: any): void;
}

interface BootOption {
  appearance?: string;
  customLauncherSelector?: string;
  hideChannelButtonOnBoot?: boolean;
  hidePopup?: boolean;
  language?: string;
  memberHash?: string;
  memberId?: string;
  pluginKey: string;
  profile?: Profile;
  trackDefaultEvent?: boolean;
  trackUtmSource?: boolean;
  unsubscribe?: boolean;
  unsubscribeEmail?: boolean;
  unsubscribeTexting?: boolean;
  zIndex?: number;
}

interface Callback {
  (error: Error | null, user: CallbackUser | null): void;
}

interface CallbackUser {
  alert: number;
  avatarUrl: string;
  id: string;
  language: string;
  memberId: string;
  name?: string;
  profile?: Profile | null;
  tags?: string[] | null;
  unsubscribeEmail: boolean;
  unsubscribeTexting: boolean;
}

interface UpdateUserInfo {
  language?: string;
  profile?: Profile | null;
  profileOnce?: Profile;
  tags?: string[] | null;
  unsubscribeEmail?: boolean;
  unsubscribeTexting?: boolean;
}

interface Profile {
  [key: string]: string | number | boolean | null | undefined;
}

interface FollowUpProfile {
  name?: string | null;
  mobileNumber?: string | null;
  email?: string | null;
}

interface EventProperty {
  [key: string]: string | number | boolean | null | undefined;
}

type Appearance = "light" | "dark" | "system" | null;

class ChannelService {
  // 채널톡 스크립트 로드
  loadScript() {
    (function () {
      const w = window;
      if (w.ChannelIO) {
        return w.console.error("ChannelIO script included twice.");
      }
      const ch: IChannelIO = function () {
        ch.c?.(arguments);
      };
      ch.q = [];
      ch.c = function (args) {
        ch.q?.push(args);
      };
      w.ChannelIO = ch;
      function l() {
        if (w.ChannelIOInitialized) {
          return;
        }
        w.ChannelIOInitialized = true;
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
        const x = document.getElementsByTagName("script")[0];
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      }
      if (document.readyState === "complete") {
        l();
      } else if ((w as any).attachEvent) {
        (w as any).attachEvent("onload", l);
      } else {
        w.addEventListener("load", l, false);
      }
    })();
  }

  // 채널톡 부팅
  boot(option: BootOption, callback?: Callback) {
    window.ChannelIO?.("boot", option, callback);
  }

  // 채널톡 종료
  shutdown() {
    window.ChannelIO?.("shutdown");
  }

  // 채널톡 표시
  show() {
    window.ChannelIO?.("show");
  }

  // 채널톡 숨기기
  hide() {
    window.ChannelIO?.("hide");
  }

  // 채널톡 열기
  open() {
    window.ChannelIO?.("open");
  }

  // 채널톡 닫기
  close() {
    window.ChannelIO?.("close");
  }

  // 온보딩 표시
  showOnboarding() {
    window.ChannelIO?.("showOnboarding");
  }

  // 온보딩 숨기기
  hideOnboarding() {
    window.ChannelIO?.("hideOnboarding");
  }

  // 사용자 정보 업데이트
  updateUser(userInfo: UpdateUserInfo, callback?: Callback) {
    window.ChannelIO?.("updateUser", userInfo, callback);
  }

  // 사용자 정보 추가
  addTags(tags: string[], callback?: Callback) {
    window.ChannelIO?.("addTags", tags, callback);
  }

  // 사용자 태그 제거
  removeTags(tags: string[], callback?: Callback) {
    window.ChannelIO?.("removeTags", tags, callback);
  }

  // 사용자 프로필 설정
  setPage(page: string) {
    window.ChannelIO?.("setPage", page);
  }

  // 사용자 프로필 리셋
  resetPage() {
    window.ChannelIO?.("resetPage");
  }

  // 이벤트 트래킹
  track(eventName: string, eventProperty?: EventProperty) {
    window.ChannelIO?.("track", eventName, eventProperty);
  }

  // 사용자 정보 가져오기
  getUser(callback: (user: CallbackUser | null) => void) {
    window.ChannelIO?.("getUser", callback);
  }

  // 외부 링크로 팔로우업
  openSupport(profile: FollowUpProfile) {
    window.ChannelIO?.("openSupport", profile);
  }

  // 외관 설정
  setAppearance(appearance: Appearance) {
    window.ChannelIO?.("setAppearance", appearance);
  }
}

export default new ChannelService();


