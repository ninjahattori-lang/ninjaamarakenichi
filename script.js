[5/3/2026 12:30 AM] Albedo: <form id="censusForm" class="space-y-8">

    <!-- BASIC DETAILS -->
    <div class="bg-white rounded-3xl shadow-lg p-8">

        <h2 class="text-2xl font-bold mb-6 text-gray-800">
            Basic Information
        </h2>

        <div class="grid md:grid-cols-2 gap-6">

            <!-- Q1 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    1. Line Number
                </label>

                <input type="text" id="q1" name="1" placeholder="Enter line number">
            </div>

            <!-- Q2 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    2. Bhawan Number
                </label>

                <input type="text" id="q2" name="2" placeholder="Enter bhawan number">
            </div>

            <!-- Q3 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    3. Makan Number
                </label>

                <input type="text" id="q3" name="3" placeholder="Enter makan number">
            </div>

            <!-- Q9 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    9. Family Number
                </label>

                <input type="text" id="q9" name="9" placeholder="Enter family number">
            </div>

            <!-- Q10 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    10. Total People Living in Family
                </label>

                <input type="number" id="q10" name="10" placeholder="Enter total members">
            </div>

            <!-- Q11 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    11. Mukhiya Name
                </label>

                <input type="text" id="q11" name="11" placeholder="Enter head of family name">
            </div>

        </div>
    </div>

    <!-- HOUSING STRUCTURE -->
    <div class="bg-white rounded-3xl shadow-lg p-8">

        <h2 class="text-2xl font-bold mb-6 text-gray-800">
            Housing Structure
        </h2>

        <!-- Q4 -->
        <div class="question-card bg-gray-50 p-5 rounded-2xl mb-5">
            <label class="font-medium text-gray-700">
                4. Floor Material
            </label>

            <select id="q4" name="4">
                <option value="">Select</option>
                <option>Mud</option>
                <option>Wood/Bamboo</option>
                <option>Burnt Brick</option>
                <option>Stone</option>
                <option>Cement</option>
                <option>Mosaic/Floor Tiles</option>
                <option>Any Other</option>
            </select>
        </div>

        <!-- Q5 -->
        <div class="question-card bg-gray-50 p-5 rounded-2xl mb-5">
            <label class="font-medium text-gray-700">
                5. Wall Material
            </label>

            <select id="q5" name="5">
                <option value="">Select</option>
                <option>Grass/Thatch/Bamboo</option>
                <option>Plastic/Polythene</option>
                <option>Mud/Unburnt Brick</option>
                <option>Wood</option>
                <option>Stone without mortar</option>
                <option>Stone with mortar</option>
                <option>G.I. Sheets/Metal</option>
                <option>Burnt Brick</option>
                <option>Concrete</option>
                <option>Any Other</option>
            </select>
        </div>

        <!-- Q6 -->
        <div class="question-card bg-gray-50 p-5 rounded-2xl mb-5">
            <label class="font-medium text-gray-700">
                6. Roof Material
            </label>
[5/3/2026 12:30 AM] Albedo: <select id="q6" name="6">
                <option value="">Select</option>
                <option>Grass/Thatch/Bamboo/Wood</option>
                <option>Plastic/Polythene</option>
                <option>Handmade Tiles</option>
                <option>Machine Made Tiles</option>
                <option>Burnt Brick</option>
                <option>Stone</option>
                <option>Slate</option>
                <option>G.I. Sheets/Metal</option>
                <option>Concrete</option>
                <option>Any Other</option>
            </select>
        </div>

        <!-- Q7 -->
        <div class="question-card bg-gray-50 p-5 rounded-2xl mb-5">
            <label class="font-medium text-gray-700">
                7. Use of Census House
            </label>

            <select id="q7" name="7">
                <option value="">Select</option>
                <option>Residence</option>
                <option>Residence-cum-Other Use</option>
                <option>Shop/Office</option>
                <option>School/College</option>
                <option>Hotel/Lodge</option>
                <option>Hospital</option>
                <option>Factory/Workshop</option>
                <option>Place of Worship</option>
                <option>Other Non Residential</option>
                <option>Vacant</option>
            </select>
        </div>

        <!-- Q8 -->
        <div class="question-card bg-gray-50 p-5 rounded-2xl">
            <label class="font-medium text-gray-700">
                8. House Condition
            </label>

            <select id="q8" name="8">
                <option value="">Select</option>
                <option>Good</option>
                <option>Livable</option>
                <option>Dilapidated</option>
            </select>
        </div>

    </div>

    <!-- FAMILY DETAILS -->
    <div class="bg-white rounded-3xl shadow-lg p-8">

        <h2 class="text-2xl font-bold mb-6 text-gray-800">
            Family Details
        </h2>

        <div class="grid md:grid-cols-2 gap-6">

            <!-- Q12 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    12. Sex
                </label>

                <select id="q12" name="12">
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                </select>
            </div>

            <!-- Q13 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    13. Category
                </label>

                <select id="q13" name="13">
                    <option value="">Select</option>
                    <option>Scheduled Caste (SC)</option>
                    <option>Scheduled Tribe (ST)</option>
                    <option>Other</option>
                </select>
            </div>

            <!-- Q14 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    14. Ownership Status
                </label>

                <select id="q14" name="14">
                    <option value="">Select</option>
                    <option>Owned</option>
                    <option>Rented but another house elsewhere</option>
                    <option>Rented and no owned house</option>
                    <option>Other</option>
                </select>
            </div>

            <!-- Q15 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    15. Number of Rooms
                </label>

                <input type="number" id="q15" name="15" placeholder="Enter rooms">
            </div>
[5/3/2026 12:30 AM] Albedo: <!-- Q16 -->
            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    16. Number of Married Couples
                </label>

                <input type="number" id="q16" name="16" placeholder="Enter couples">
            </div>

        </div>
    </div>

    <!-- FACILITIES -->
    <div class="bg-white rounded-3xl shadow-lg p-8">

        <h2 class="text-2xl font-bold mb-6 text-gray-800">
            Amenities & Facilities
        </h2>

        <div class="space-y-6">

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    17. Drinking Water Source
                </label>

                <select id="q17" name="17">
                    <option value="">Select</option>
                    <option>Tap Water Treated</option>
                    <option>Tap Water Untreated</option>
                    <option>Well</option>
                    <option>Hand Pump</option>
                    <option>Tube-well/Borewell</option>
                    <option>Spring</option>
                    <option>River/Canal</option>
                    <option>Tank/Pond/Lake</option>
                    <option>Bottled Water</option>
                    <option>Any Other</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    18. Water Availability
                </label>

                <select id="q18" name="18">
                    <option value="">Select</option>
                    <option>Within premises</option>
                    <option>Near premises</option>
                    <option>Far away</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    19. Main Lighting Source
                </label>

                <select id="q19" name="19">
                    <option value="">Select</option>
                    <option>Electricity</option>
                    <option>Kerosene</option>
                    <option>Solar Energy</option>
                    <option>Other Oil</option>
                    <option>Other</option>
                    <option>No Lighting</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    20. Toilet Availability
                </label>

                <select id="q20" name="20">
                    <option value="">Select</option>
                    <option>Yes Private</option>
                    <option>Shared</option>
                    <option>Public Toilet</option>
                    <option>No</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    21. Toilet Type
                </label>

                <select id="q21" name="21">
                    <option value="">Select</option>
                    <option>Piped Sewer</option>
                    <option>Septic Tank</option>
                    <option>Pit Toilet</option>
                    <option>Open Drain</option>
                    <option>Other</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    22. Wastewater Disposal
                </label>
[5/3/2026 12:30 AM] Albedo: <select id="q22" name="22">
                    <option value="">Select</option>
                    <option>Closed Drain</option>
                    <option>Open Drain</option>
                    <option>No Drainage</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    23. Bathroom Availability
                </label>

                <select id="q23" name="23">
                    <option value="">Select</option>
                    <option>Bathroom Available</option>
                    <option>Without Roof</option>
                    <option>No</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    24. LPG/PNG Connection
                </label>

                <select id="q24" name="24">
                    <option value="">Select</option>
                    <option>LPG Available</option>
                    <option>LPG Not Available</option>
                </select>
            </div>

            <div class="question-card bg-gray-50 p-5 rounded-2xl">
                <label class="font-medium text-gray-700">
                    25. Main Fuel Used for Cooking
                </label>

                <select id="q25" name="25">
                    <option value="">Select</option>
                    <option>Firewood</option>
                    <option>Crop Residue</option>
                    <option>Coal</option>
                    <option>Kerosene</option>
                    <option>LPG/PNG</option>
                    <option>Electricity</option>
                    <option>Biogas</option>
                    <option>Other</option>
                </select>
            </div>

        </div>
    </div>
[5/3/2026 12:32 AM] Albedo: <!-- Q26 -->
<div class="mb-8">
    <h3 class="font-semibold text-lg mb-4">
        26. Radio / Transistor
    </h3>

    <div class="checkbox-grid">
        <label class="checkbox-item">
            <input type="checkbox" name="26" value="Traditional Radio Set">
            Traditional Radio Set
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="26" value="Mobile/Smartphone">
            Mobile/Smartphone
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="26" value="Other Device">
            Other Device
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="26" value="No">
            No
        </label>
    </div>
</div>

<!-- Q27 -->
<div class="mb-8">
    <h3 class="font-semibold text-lg mb-4">
        27. Television
    </h3>

    <div class="checkbox-grid">
        <label class="checkbox-item">
            <input type="checkbox" name="27" value="Free to Air">
            Free to Air
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="27" value="DTH">
            DTH
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="27" value="Cable">
            Cable
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="27" value="No">
            No
        </label>
    </div>
</div>

<!-- Q28 -->
<div class="mb-8">
    <h3 class="font-semibold text-lg mb-4">
        28. Internet Access
    </h3>

    <div class="checkbox-grid">
        <label class="checkbox-item">
            <input type="checkbox" name="28" value="Laptop/Computer">
            Laptop/Computer
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="28" value="Mobile">
            Mobile
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="28" value="Other Device">
            Other Device
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="28" value="No">
            No
        </label>
    </div>
</div>

<!-- Q29 -->
<div class="mb-8">
    <h3 class="font-semibold text-lg mb-4">
        29. Laptop / Computer
    </h3>

    <select id="q29" name="29">
        <option value="">Select</option>
        <option>Yes</option>
        <option>No</option>
    </select>
</div>

<!-- Q30 -->
<div class="mb-8">
    <h3 class="font-semibold text-lg mb-4">
        30. Phone Facilities
    </h3>

    <div class="checkbox-grid">
        <label class="checkbox-item">
            <input type="checkbox" name="30" value="Telephone">
            Telephone
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="30" value="Smartphone">
            Smartphone
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="30" value="Mobile Phone">
            Mobile Phone
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="30" value="No">
            No
        </label>
    </div>
</div>

<!-- Q31 -->
<div class="mb-8">
    <h3 class="font-semibold text-lg mb-4">
        31. Vehicles
    </h3>

    <div class="checkbox-grid">
        <label class="checkbox-item">
            <input type="checkbox" name="31" value="Cycle">
            Cycle
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="31" value="Scooter">
            Scooter
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="31" value="Bike">
            Bike
        </label>

        <label class="checkbox-item">
            <input type="checkbox" name="31" value="Moped">
            Moped
        </label>
    </div>
</div>

<!-- Q32 -->
<div class="mb-8">
    <h3 class="font-semibold text-lg mb-4">
        32. Car / Jeep / Van
    </h3>
[5/3/2026 12:34 AM] Albedo: body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: #f3f4f6;
}

.section-header {
    background: linear-gradient(135deg, #1d4ed8, #2563eb);
}

.question-card {
    transition: 0.3s ease;
}

.question-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
}

/* Inputs */
input,
select {
    width: 100%;
    margin-top: 10px;
    padding: 12px 14px;
    border: 1px solid #d1d5db;
    border-radius: 14px;
    background: white;
    outline: none;
    transition: 0.2s;
}

input:focus,
select:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
}

/* Checkbox Layout */
.checkbox-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
}

.checkbox-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    padding: 14px;
    border-radius: 14px;
    transition: 0.2s;
    cursor: pointer;
}

.checkbox-item:hover {
    background: #eff6ff;
    border-color: #60a5fa;
}

.checkbox-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #2563eb;
}body{
    background:#f3f4f6;
    font-family:Arial, sans-serif;
}

.question-card input,
.question-card select{
    width:100%;
    margin-top:10px;
    padding:12px;
    border:1px solid #d1d5db;
    border-radius:12px;
    outline:none;
}

.checkbox-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:12px;
}

.checkbox-item{
    background:#f9fafb;
    padding:12px;
    border-radius:12px;
    display:flex;
    align-items:center;
    gap:10px;
}

.section-header{
    background:linear-gradient(to right,#2563eb,#1d4ed8);
}
