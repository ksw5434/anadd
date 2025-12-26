import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "이용약관",
  description: "어나드범어 이용약관",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-8 text-white">이용약관</h1>
          <div className="prose prose-invert max-w-none text-neutral-300 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제1조 (목적)
              </h2>
              <p>
                이 약관은 어나드범어(&quot;회사&quot; 또는 &quot;우리&quot;)가
                운영하는 웹사이트(이하 &quot;사이트&quot;)의 서비스 이용과
                관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한
                사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제2조 (정의)
              </h2>
              <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>&quot;사이트&quot;</strong>란 회사가 컴퓨터 등
                  정보통신설비를 이용하여 서비스를 제공할 수 있도록 설정한
                  가상의 영업장을 말하며, 아울러 사이트를 운영하는 사업자의
                  의미로도 사용합니다.
                </li>
                <li>
                  <strong>&quot;이용자&quot;</strong>란 사이트에 접속하여 이
                  약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을
                  말합니다.
                </li>
                <li>
                  <strong>&quot;회원&quot;</strong>이란 사이트에 회원등록을 하고
                  회사가 제공하는 서비스를 이용하는 자를 말합니다.
                </li>
                <li>
                  <strong>&quot;비회원&quot;</strong>이란 회원에 가입하지 않고
                  회사가 제공하는 서비스를 이용하는 자를 말합니다.
                </li>
                <li>
                  <strong>&quot;서비스&quot;</strong>란 회사가 제공하는 분양
                  정보, 청약 정보, 모델하우스 예약 등 모든 온라인 서비스를
                  의미합니다.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제3조 (약관의 게시와 개정)
              </h2>
              <p>
                회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 사이트의 초기
                서비스 화면에 게시합니다.
              </p>
              <p>
                회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을
                개정할 수 있습니다.
              </p>
              <p>
                회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
                현행약관과 함께 사이트의 초기화면에 그 적용일자 7일 이전부터
                적용일자 전일까지 공지합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제4조 (서비스의 제공 및 변경)
              </h2>
              <p>회사는 다음과 같은 서비스를 제공합니다:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>프로젝트 정보 제공</li>
                <li>분양 정보 및 청약 안내</li>
                <li>모델하우스 예약 서비스</li>
                <li>관심 등록 서비스</li>
                <li>
                  기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게
                  제공하는 일체의 서비스
                </li>
              </ul>
              <p>
                회사는 서비스의 내용을 변경할 수 있으며, 변경 시에는 사전에
                공지합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제5조 (서비스의 중단)
              </h2>
              <p>
                회사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의
                두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로
                중단할 수 있습니다.
              </p>
              <p>
                회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로
                인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단,
                회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지
                아니합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제6조 (회원가입)
              </h2>
              <p>
                이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이
                약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
              </p>
              <p>
                회사는 제1항과 같이 회원가입을 신청한 이용자 중 다음 각 호에
                해당하지 않는 한 회원으로 등록합니다:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이
                  있는 경우
                </li>
                <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                <li>
                  기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고
                  판단되는 경우
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제7조 (회원정보의 변경)
              </h2>
              <p>
                회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를
                열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한
                실명, 아이디 등은 수정이 불가능합니다.
              </p>
              <p>
                회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로
                수정을 하거나 전자우편 기타 방법으로 회사에 대하여 그 변경사항을
                알려야 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제8조 (개인정보보호)
              </h2>
              <p>
                회사는 이용자의 개인정보 수집 시 서비스 제공을 위하여 필요한
                범위에서 최소한의 개인정보를 수집합니다.
              </p>
              <p>
                회사는 회원가입 시 구매계약이행에 필요한 정보를 미리 수집하지
                않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에
                본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는
                경우에는 그러하지 아니합니다.
              </p>
              <p>
                회사는 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게
                그 목적을 고지하고 동의를 받습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제9조 (회사의 의무)
              </h2>
              <p>
                회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지
                않으며, 이 약관이 정하는 바에 따라 지속적이고, 안정적으로
                서비스를 제공하는데 최선을 다하여야 합니다.
              </p>
              <p>
                회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록
                이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을
                갖추어야 합니다.
              </p>
              <p>
                회사가 상품이나 용역에 대하여 표시·광고의 공정화에 관한 법률
                제3조 소정의 부당한 표시·광고행위를 함으로써 이용자가 손해를
                입은 때에는 이를 배상할 책임을 집니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제10조 (회원의 의무)
              </h2>
              <p>회원은 다음 행위를 하여서는 안 됩니다:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>신청 또는 변경 시 허위내용의 등록</li>
                <li>타인의 정보 도용</li>
                <li>회사가 게시한 정보의 변경</li>
                <li>
                  회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신
                  또는 게시
                </li>
                <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>
                  회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
                </li>
                <li>
                  외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는
                  정보를 사이트에 공개 또는 게시하는 행위
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제11조 (분양 정보의 제공)
              </h2>
              <p>
                회사는 사이트를 통하여 분양 정보, 청약 일정, 분양가, 평면도 등
                프로젝트 관련 정보를 제공합니다.
              </p>
              <p>
                제공되는 정보는 실제 분양 정보와 다를 수 있으며, 최종 정보는
                분양계약 시 확인하시기 바랍니다.
              </p>
              <p>회사는 분양 정보의 변경사항이 있을 경우 사전에 공지합니다.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제12조 (면책조항)
              </h2>
              <p>
                회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
                제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              </p>
              <p>
                회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는
                책임을 지지 않습니다.
              </p>
              <p>
                회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에
                대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로
                인한 손해에 관하여 책임을 지지 않습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                제13조 (분쟁해결)
              </h2>
              <p>
                회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
                피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.
              </p>
              <p>
                회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소
                당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를
                관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의
                주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는
                민사소송법상의 관할법원에 제기합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">부칙</h2>
              <p>이 약관은 2025년 1월 1일부터 시행됩니다.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
