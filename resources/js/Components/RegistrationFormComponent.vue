<template>
    <form @submit.prevent>
        <label for="name">{{ trans('form.name') }}</label>
        <input id="name" name="name" type="text" required>

        <label for="email">{{ trans('form.email') }}</label>
        <input id="email" name="email" type="email" required>

        <label for="birthdate">{{ trans('form.birthdate') }}</label>
        <input id="birthdate" name="birthdate" type="date" required>

        <label for="passport_id">{{ trans('form.passport_id') }}</label>
        <input id="passport_id" name="passport_id" type="text" required>

        <label for="participate">{{ trans('form.participate') }}</label>
        <input id="participate" name="participate" type="checkbox" required>

        <label for="fear_of_flying">{{ trans('form.fear_of_flying') }}</label>
        <select id="fear_of_flying" name="fear_of_flying">
            <option value="yes">{{ trans('form.yes') }}</option>
            <option value="no">{{ trans('form.no') }}</option>
            <option value="maybe">{{ trans('form.maybe') }}</option>
        </select>

        <label for="allergies">{{ trans('form.allergies') }}</label>
        <input id="allergies" name="allergies" type="text">

        <label for="travel_wishes">{{ trans('form.travel_wishes') }}</label>
        <textarea name="travel_wishes" id="travel_wishes" cols="30" rows="10"></textarea>

        <input type="submit" :value="trans('form.submit')">
    </form>
</template>
<script>
export default {
    name: 'RegistrationFormComponent',
    data () {
        return {
            form: {
                name: this.$page.props.data.form.name ?? null,
                email: this.$page.props.data.form.email ?? null,
                birthdate: this.$page.props.data.form.birthdate ?? null,
                passport_id: this.$page.props.data.form.passport_id ?? null,
                participate: this.$page.props.data.form.participate ?? null,
                fear_of_flying: this.$page.props.data.form.fear_of_flying ?? false,
                allergies_or_medicine: this.$page.props.data.form.allergies_or_medicine ?? [],
                travel_wishes: this.$page.props.data.form.travel_wishes ?? null,
            }
        }
    }
}
</script>
