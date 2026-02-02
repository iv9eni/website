<script lang="ts">
    import IconCustomGithub from '~icons/custom/github';
    import IconCustomLinkedin from '~icons/custom/linkedin';
    import IconCustomEmail from '~icons/custom/email';
    import IconCustomPdf from '~icons/custom/pdf';

    export let name: string;
    export let width: string | number = 16;
    export let height: string | number = 16;
    export let color: string | undefined = undefined;
    export let darkColor: string | undefined = undefined;
    export let hoverColor: string | undefined = undefined;
    export let darkHoverColor: string | undefined = undefined;

    const iconMap: Record<string, any> = {
        github: IconCustomGithub,
        linkedin: IconCustomLinkedin,
        email: IconCustomEmail,
        pdf: IconCustomPdf,
    };

    $: IconComponent = iconMap[name];
</script>

{#if IconComponent}
    <span
        class="icon-wrapper"
        style:--light-color={color}
        style:--dark-color={darkColor}
        style:--light-hover-color={hoverColor}
        style:--dark-hover-color={darkHoverColor}
    >
        <IconComponent {width} {height} />
    </span>
{/if}

<style>
    .icon-wrapper :global(svg) {
        color: var(--light-color);
        transition: color 0.3s ease;
    }
    :global(a:hover) .icon-wrapper :global(svg) {
        color: var(--light-hover-color, var(--light-color));
    }
    :global(.dark) .icon-wrapper :global(svg) {
        color: var(--dark-color, var(--light-color));
    }
    :global(.dark a:hover) .icon-wrapper :global(svg) {
        color: var(--dark-hover-color, var(--dark-color, var(--light-color)));
    }
</style>
