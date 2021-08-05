<template>
    <layout>
        <RegistrationFormComponent/>
    </layout>
</template>

<script>
import Layout from "../Layout/Layout";
import RegistrationFormComponent from "../Components/RegistrationFormComponent";

export default {
    name: "Index",
    components: {
        RegistrationFormComponent,
        Layout
    }
}
</script>
