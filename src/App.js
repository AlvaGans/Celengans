const app = document.getElementById('app');
app.innerHTML = `
    <div class="container">
        <header>
            <h1>Celengan Gayatri</h1>
            <p>Catat target tabunganmu dan estimasi waktu tercapai!</p>
        </header>
        <form id="savings-form">
            <input type="text" id="goal-name" placeholder="Nama Tabungan" required />
            <input type="number" id="goal-target" placeholder="Target Nominal (Rp)" required />
            <input type="number" id="daily-save" placeholder="Tabungan per Hari (Rp)" required />
            <button type="submit">Tambah Tabungan</button>
        </form>
        <div class="target-estimator" id="target-estimator">
            Estimasi waktu tercapai: <b>-</b>
        </div>
        <div class="savings-list" id="savings-list"></div>
    </div>
`;

const form = document.getElementById('savings-form');
const savingsList = document.getElementById('savings-list');
const estimator = document.getElementById('target-estimator');
let goals = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('goal-name').value.trim();
    const target = parseInt(document.getElementById('goal-target').value, 10);
    const daily = parseInt(document.getElementById('daily-save').value, 10);

    if (!name || !target || !daily || target <= 0 || daily <= 0) {
        alert('Isi semua data dengan benar!');
        return;
    }

    // Estimasi hari
    let days = Math.ceil(target / daily);
    let finishDate = '-';
    if (days > 0) {
        const now = new Date();
        now.setDate(now.getDate() + days);
        finishDate = now.toLocaleDateString('id-ID');
    }

    goals.push({ name, target, daily, days, finishDate });
    renderList();
    estimator.innerHTML = `Estimasi waktu tercapai: <b>${days} hari (${finishDate})</b>`;
    form.reset();
});

function renderList() {
    if (goals.length === 0) {
        savingsList.innerHTML = '<p>Belum ada tabungan.</p>';
        return;
    }
    savingsList.innerHTML = goals.map((goal, idx) => `
        <div class="savings-item">
            <strong>${goal.name}</strong><br>
            Target: Rp${goal.target.toLocaleString()}<br>
            Nabung per hari: Rp${goal.daily.toLocaleString()}<br>
            Estimasi: ${goal.days} hari (${goal.finishDate})<br>
            <button onclick="removeGoal(${idx})">Hapus</button>
        </div>
    `).join('');
}

// Hapus tabungan
window.removeGoal = function(idx) {
    goals.splice(idx, 1);
    renderList();
    estimator.innerHTML = 'Estimasi waktu tercapai: <b>-</b>';
};