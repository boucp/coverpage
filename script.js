function updatePreview() {
  document.getElementById("p_name").textContent = document.getElementById("name").value;
  document.getElementById("p_student_id").textContent = document.getElementById("student_id").value;
  document.getElementById("p_course_title").textContent = document.getElementById("course_title").value;
  document.getElementById("p_course_code").textContent = document.getElementById("course_code").value;
  document.getElementById("p_semester").textContent = document.getElementById("semester").value;
  document.getElementById("p_instructor").textContent = document.getElementById("instructor").value;
  document.getElementById("p_submission_date").textContent = document.getElementById("submission_date").value;
}

document.getElementById("cover-form").addEventListener("input", updatePreview);

function generatePDF() {
  const element = document.getElementById("preview");
  html2pdf().from(element).save("coverpage.pdf");
}