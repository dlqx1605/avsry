import { useNavigate } from 'react-router-dom';

function Tc() {

    const navigate = useNavigate();
    
    function click() {
        const txt = "Sometimes, Darelyn can be very very very very very very very very very very annoying, but this will be more annoying than her!"
        if (document.querySelector("input").value === txt) {
            navigate('/bdbd', { replace: true });
        } else {
            alert("you got that wrong!!")
        }
    }

    return (
      <div className="Home" style={{textAlign:'left', padding:"50px 15vw"}}>
    <h1>Software Terms and Conditions</h1>
  <p>Welcome to Tze Jit Gift Company! We extend a warm welcome to you as you embark on your journey of utilizing our exceptional software products and services. Before you proceed, it is imperative that you invest the necessary time and effort to thoroughly read and comprehensively understand the following Terms and Conditions ("Agreement"). This Agreement delineates the precise guidelines and regulations governing your use of our software, encompassing all related applications, updates, and services provided by Tze Jit Gift Company (collectively referred to as the "Software").</p>
  <h2>1. Acceptance of Terms</h2>
  <p>By accessing, downloading, installing, or using our Software, you affirmatively acknowledge and accept that you have meticulously perused, comprehended, and unequivocally agreed to be irrevocably bound by the terms and conditions meticulously outlined in this Agreement. Should you harbor any objections, concerns, or disagreements with any aspect of this Agreement, we humbly request that you exercise prudence and abstain from utilizing the Software in any capacity.</p>
  <h2>2. License Grant</h2>
  <h3>2.1 Grant of License</h3>
  <p>Subject to your unwavering adherence to the terms and conditions expounded in this Agreement, we hereby confer upon you a limited, non-exclusive, non-transferable, and revocable license to utilize the Software for your personal or internal business purposes, as expressly permitted by this Agreement.</p>
  <h3>2.2 Restrictions</h3>
  <p>You solemnly undertake and warrant that you shall not, under any circumstances, directly or indirectly, engage in any of the following actions or conduct with regard to the Software:</p>
  <ol type="a">
    <li>Reproduce, copy, duplicate, modify, adapt, translate, reverse engineer, disassemble, or create derivative works from the Software, in whole or in part;</li>
    <li>Distribute, sublicense, lease, rent, loan, transmit, or otherwise transfer the Software to any third party, whether for commercial gain, barter, or any other form of consideration;</li>
    <li>Remove, alter, obscure, or tamper with any proprietary notices, copyright, trademark, or other intellectual property indications affixed to or embedded within the Software;</li>
    <li>Utilize the Software in any manner that contravenes or violates any applicable laws, regulations, statutes, or ordinances;</li>
    <li>Employ the Software for the purpose of infringing upon the intellectual property rights, privacy rights, confidentiality rights, or any other legal rights of any third party.</li>
  </ol>
  <h2>3. Ownership</h2>
  <p>The Software, along with all intellectual property rights inherent therein, expressly and unequivocally belongs to Tze Jit Gift Company or its esteemed licensors. This Agreement in no way, shape, or form confers or grants to you any ownership rights, title, or interests in the Software, apart from the limited license expressly stipulated herein.</p>
  <h2>4. User Content</h2>
  <h3>4.1 User Responsibilities</h3>
  <p>You, as the end user, bear full and absolute responsibility for any content you create, transmit, upload, post, display, or otherwise make available using the Software ("User Content"). You solemnly represent and warrant that you possess all requisite rights, permissions, licenses, and authorizations necessary to utilize and furnish the User Content, and that such utilization and furnishing of the User Content shall not, under any circumstances, infringe upon, violate, or contravene the rights of any third party or any applicable laws or regulations.</p>
  <h3>4.2 License to User Content</h3>
  <p>By utilizing the Software and availing yourself of its services, you hereby grant Tze Jit Gift Company a worldwide, non-exclusive, royalty-free, fully sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display the User Content for the sole and express purpose of providing and enhancing the Software's functionality and services.</p>
  <h2>5. Privacy</h2>
  <p>We place the highest value on safeguarding and preserving your privacy and personal information. Our Privacy Policy, which can be found on our official website, comprehensively elucidates the methods and practices employed by Tze Jit Gift Company to collect, utilize, disclose, and protect your personal data. We commit to adhering to all applicable data protection laws and regulations in handling your personal information.</p>
  <h2>6. Support</h2>
  <p>Tze Jit Gift Company strives to provide exemplary customer support for our Software. Addtional support for completion of tasks can be purchased with additional fees as determined at the time of support by Tze Jit Gift Company. Tze Jit Gift Company reserves the right to reject support request it deems trivial or damaging to the experience of the game.</p>
  <h2>7. Modifications to the Agreement</h2>
  <p>Tze Jit Gift Company reserves the right to modify, amend, or revise this Agreement at any time, without prior notice or consent. Any changes to the Agreement shall be effective immediately upon posting the updated version on our official website. It is your responsibility to regularly review the Agreement to stay informed of any modifications. Continued use of the Software after such modifications constitutes your acceptance of the revised Agreement.</p>
  <h2>8. Termination</h2>
  <p>This Agreement shall remain in effect until terminated by either party. You may terminate this Agreement by ceasing all use of the Software and deleting all copies in your possession. Tze Jit Gift Company reserves the right to terminate this Agreement, at its sole discretion, if you breach any provision herein.</p>
  <h2>9. Disclaimer of Warranty</h2>
  <p>The Software is provided on an "as is" and "as available" basis, without any warranties or representations, express or implied. Tze Jit Gift Company disclaims all warranties, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. Your use of the Software is at your sole risk. Tze Jit Gift Company makes no guarantees or promises regarding the accuracy, reliability, or suitability of the Software for your specific needs or requirements.</p>
  <h2>10. Limitation of Liability</h2>
  <p>To the maximum extent permitted by applicable laws, Tze Jit Gift Company and its affiliates, directors, officers, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of or in connection with your use of the Software, including but not limited to damages for loss of profits, goodwill, data, or other intangible losses, even if Tze Jit Gift Company has been advised of the possibility of such damages. This limitation of liability applies regardless of the legal theory or cause of action.</p>
  <h2>11. General</h2>
  <p>11.1 Entire Agreement: This Agreement constitutes the entire agreement between you and Tze Jit Gift Company regarding the subject matter herein and supersedes all prior understandings, representations, or agreements, whether written or oral, relating to the Software.</p>
  <p>11.2 Severability: If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid, illegal, or unenforceable provision shall be construed in a manner consistent with applicable laws to reflect the original intent as closely as possible.</p>
  <p>11.3 Governing Law: This Agreement shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of laws principles.</p>
  <p>11.4 Dispute Resolution: Any disputes arising out of or in connection with this Agreement shall be resolved through good faith negotiations between the parties. If the parties are unable to reach a resolution, the dispute shall be submitted to binding arbitration in accordance with the rules and procedures of the designated arbitration organization.</p>
  <p>11.5 Waiver: The failure of Tze Jit Gift Company to enforce any right or provision of this Agreement shall not be deemed a waiver of such right or provision.</p>
  <p>11.6 Contact Information: If you have any questions or concerns about this Agreement, please contact us at tzejit@gmail.com.</p>
  <p>By continuing to use the Software, you acknowledge that you have read, understood, and agreed to be bound by the terms and conditions set forth in this Agreement, including but not limited to supressing emotions of emoness whenever support cannot be rendered in a timely manner or with regards to the costs and fees incurred as result of support matters.</p>  </div>
    );
  }
  
  export default Tc;
  