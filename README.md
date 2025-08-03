
  <h1>Solve these Problems using JavaScript</h1>

  <h2>Important Note:</h2>
  <ul>
    <li>প্রতিটা প্রবলেম ভালোভাবে পড়বে, লজিক খুঁজার চেষ্টা করবে এবং এরপর কোড করে প্রবলেমটা সলভ করবে।</li>
    <li>যেখানে specific ভাবে console.log করতে বলা হয়েছে, তার বাইরে নিজের মতো করে কিছু console করবে না।</li>
    <li>প্রতিটা প্রবলেমে যেসব ভ্যারিয়েবল দেওয়া আছে, সেগুলোর নাম কোনোভাবেই পরিবর্তন করা যাবে না।</li>
    <li>সবগুলো ভ্যারিয়েবল <code>var</code> দিয়ে declare করতে হবে।</li>
    <li>এক প্রবলেমের ভ্যারিয়েবল যেন অন্য প্রবলেমের সঙ্গে মিলে না যায়, সেটা খেয়াল রাখতে হবে।</li>
  </ul>

  <h2>Problem 01: Divide the Asset</h2>
  <p>রহিম করিম দুই ভাই। তাদের বাবার একটি জমি আছে যার ক্ষেত্রফল <code>area</code> নামে একটি ভ্যারিয়েবল দিয়ে সেভ করা আছে। তাদের বাবা সমান দুই ভাগে সম্পত্তি ভাগ করে দিতে চান। এখন কে কতটুকু জমি পাবে সেটা প্রোগ্রাম করে নির্ধারণ করো এবং নিচের মত করে আউটপুট দেখাও।</p>
  <table>
    <thead><tr><th>Value of area</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>100</td><td>50</td></tr>
      <tr><td>15</td><td>7.5</td></tr>
      <tr><td>2060</td><td>1030</td></tr>
    </tbody>
  </table>
  <pre><code>/** Problem -01 ( Divide the Asset ) */
var area = 800;
// Write your code here</code></pre>

  <h2>Problem 02: Cycle or Laptop</h2>
  <p>মনু্ট SSC পরীক্ষায় GPA 5 পেয়েছে। সে তার বাবার কাছে বায়না ধরেছে যে তাকে Cycle কিনে দিতে হবে কিংবা Laptop। নিচের শর্ত অনুযায়ী প্রোগ্রামটি লিখো:</p>
  <ul>
    <li>যদি টাকার পরিমাণ ২৫০০০ বা তার বেশি হয় তবে "Laptop"</li>
    <li>১০০০০ বা তার বেশি হলে "Cycle"</li>
    <li>এর কম হলে "Chocolate"</li>
  </ul>
  <table>
    <thead><tr><th>money</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>45000</td><td>Laptop</td></tr>
      <tr><td>10000</td><td>Cycle</td></tr>
      <tr><td>9999</td><td>Chocolate</td></tr>
    </tbody>
  </table>
  <pre><code>/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
// Write your code here</code></pre>

  <h2>Problem 03: Medicine Planner</h2>
  <p>রহিমা বেগম মাসের ১ তারিখ থেকে ওষুধ খাচ্ছেন যেটা প্রতি ৩ দিন পর পর খেতে হবে। <code>lastDay</code> পর্যন্ত কোন কোন দিন ওষুধ খাবেন এবং কোন কোন দিন খাবেন না তা নিচের মত করে প্রিন্ট করতে হবে।</p>
  <table>
    <thead><tr><th>lastDay</th><th>Output</th></tr></thead>
    <tbody>
      <tr>
        <td>4</td>
        <td>
          1 - rest<br>
          2 - rest<br>
          3 - medicine<br>
          4 - rest
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          1 - rest<br>
          2 - rest<br>
          3 - medicine<br>
          4 - rest<br>
          5 - rest<br>
          6 - medicine
        </td>
      </tr>
    </tbody>
  </table>
  <pre><code>/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
// Write your code here</code></pre>

  <h2>Problem 04: Delete / Store</h2>
  <p>সুমনার পিসিতে অনেক ফাইল জমে গেছে। তার মধ্যে কিছু ফাইল রাখতে হবে আর কিছু ডিলিট করতে হবে নিচের শর্ত অনুযায়ী:</p>
  <ul>
    <li>ফাইলের নামের শুরুতে # থাকলে "Store"</li>
    <li>pdf ফাইল হলে "Store"</li>
    <li>docx ফাইল হলে "Store"</li>
    <li>অন্যান্য সব ক্ষেত্রে "Delete"</li>
  </ul>
  <table>
    <thead><tr><th>fileName</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>result.pdf</td><td>Store</td></tr>
      <tr><td>data.docx</td><td>Store</td></tr>
      <tr><td>pdfData.jpg</td><td>Delete</td></tr>
      <tr><td>#exp.mp4</td><td>Store</td></tr>
      <tr><td>docx.txt</td><td>Delete</td></tr>
      <tr><td>docx.xpdf</td><td>Delete</td></tr>
      <tr><td>slipdf.txt</td><td>Delete</td></tr>
    </tbody>
  </table>
  <pre><code>/** Problem -04 ( Delete / Store ) */
var fileName = "pdfData.jpg";
// Write your code here</code></pre>

  <h2>Problem 05: PH Email Generator</h2>
  <p>PH University-তে পড়া student এর নাম, রোল এবং ডিপার্টমেন্ট থেকে ইমেইল তৈরি করতে হবে। ইমেইলের format হবে:</p>
  <code>name+roll.department@ph.ac.bd</code>
  <table>
    <thead><tr><th>Student Object</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>{ name: "kuddus", roll: 1014, department: "cse" }</td><td>kuddus1014.cse@ph.ac.bd</td></tr>
      <tr><td>{ name: "monu", roll: 99, department: "eee" }</td><td>monu99.eee@ph.ac.bd</td></tr>
      <tr><td>{ name: "mewo", roll: 96, department: "cse" }</td><td>mewo96.cse@ph.ac.bd</td></tr>
    </tbody>
  </table>
  <pre><code>/** Problem -05 ( PH Email Generator ) */
var student = { name: "kuddus", roll: 1014, department: "cse" };
// Write your code here</code></pre>

  <h2>Problem 06: Current Salary (Challenge Problem)</h2>
  <p>হাসান সাহেব সরকারী চাকরিজীবী। প্রতি বছর তার salary ৫% হারে বাড়ে। তার <code>startingSalary</code> এবং <code>experience</code> অনুযায়ী বর্তমানে তার salary কত তা নির্ণয় করো। দশমিকের পর সর্বোচ্চ ২ ডিজিট থাকবে।</p>
  <table>
    <thead><tr><th>startingSalary</th><th>experience</th><th>Output</th></tr></thead>
    <tbody>
      <tr><td>45000</td><td>30</td><td>194487.41</td></tr>
      <tr><td>15000</td><td>3</td><td>17364.38</td></tr>
      <tr><td>30000</td><td>40</td><td>211199.66</td></tr>
    </tbody>
  </table>
  <pre><code>/** Problem -06 ( Current Salary ) */
var experience = 30;
var startingSalary = 45000;
// Write your code here</code></pre>

